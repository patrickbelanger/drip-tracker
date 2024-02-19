import React from 'react';
import {Container, Link, Stack, Typography} from "@mui/material";
import Features from '../components/features';
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Welcome = () => {

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 2 },
                    pb: { xs: 8, sm: 2 },
                }}
            >
                <Stack spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Drip Tracker
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                        Experience the power of precision with our intuitive Drip Tracker, tailor-made to enhance
                        your investment journey.
                    </Typography>
                    <Link
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > svg': { transition: '0.2s' },
                            '&:hover > svg': { transform: 'translateX(2px)' },
                        }}
                    >
                        <span>Login</span>
                        <ChevronRightRoundedIcon
                            fontSize="small"
                            sx={{ mt: '1px', ml: '2px' }}
                        />
                    </Link>
                    <Link
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > svg': { transition: '0.2s' },
                            '&:hover > svg': { transform: 'translateX(2px)' },
                        }}
                    >
                        <span>Create Account</span>
                        <ChevronRightRoundedIcon
                            fontSize="small"
                            sx={{ mt: '1px', ml: '2px' }}
                        />
                    </Link>
                    <Features />
                </Stack>
            </Container>
        </>
    );
};

export default Welcome;