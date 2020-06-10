import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jI4ooO0w7GDdm0MYn0-GFIbaYNc7qyQiGnvj2uLQ-iRcKD69V3thSO9oem-XklvWGvMU9mYt2qEVrAR4hcijMKI0Ob4UGUNVK4KMKjkic_Ag9_TMa9nDYFa5bHLDXnYx'
    }
});

