package io.github.patrickbelanger.drip.tracker.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain


@Configuration
@EnableWebSecurity
class SecurityConfiguration {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .authorizeHttpRequests { authorize ->
                authorize
                    .requestMatchers("/welcome").permitAll()
                    .anyRequest().authenticated()

            }
            .formLogin { authorize ->
                authorize
                    .loginPage("/login").permitAll()
            }
            .logout { logout ->
                logout
                    .logoutSuccessUrl("/welcome")
            }
            .sessionManagement { session ->
                session
                    .maximumSessions(1)
            }
        return http.build()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder? {
        return BCryptPasswordEncoder()
    }
}