package io.github.patrickbelanger.drip.tracker.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import javax.sql.DataSource

@Configuration
@EnableWebSecurity
class SecurityConfiguration {

    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
      return http
            .authorizeHttpRequests { authorize ->
                authorize
                    .requestMatchers(
                            "/login*",
                            "/error",
                            "/h2-console/**").permitAll()
                    .anyRequest().authenticated()
            }
            .formLogin { authorize ->
                authorize
                    .loginPage("/login")
                    .loginProcessingUrl("/login")
            }
            .logout { logout ->
                logout
                    .logoutSuccessUrl("/login") // Temporary
            }
            .cors { cors ->
                cors
                    .disable()
            }
            .csrf { csrf ->
                csrf
                    .ignoringRequestMatchers("/h2-console/**")
            }
            .headers { headers ->
                headers.frameOptions { frameOptionsCustomizer ->
                    frameOptionsCustomizer.disable()
                }
            }
            .build()
    }

    @Bean
    fun dataSource(): DataSource {
        return EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
                .build()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder? {
        return BCryptPasswordEncoder()
    }
}