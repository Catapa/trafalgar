import React from 'react';
import styles from './Services.module.scss';
import HeadingUnderlined from '../../Components/HeadingUnderlined/HeadingUnderlined';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import Button from '../../Components/Button/Button';

const Services = () => {
    return (
        <article className={styles.services_section}>
            <HeadingUnderlined align='center'>Our Services</HeadingUnderlined>
            <p className={styles.description}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <section className={styles.service_cards_grid}>
                <ServiceCard image_src={'assets/search_doctor_icon.svg'} title={'Search doctor'}>Choose your doctor from thousands of specialist, general, and trusted hospitals</ServiceCard>
                <ServiceCard image_src={'assets/online_pharmacy_icon.svg'} title={'Online pharmacy'}>Buy  your medicines with our mobile application with a simple delivery system</ServiceCard>
                <ServiceCard image_src={'assets/consultation_icon.svg'} title={'Consultation'}>Free consultation with our trusted doctors and get the best recomendations</ServiceCard>
                <ServiceCard image_src={'assets/details_info_icon.svg'} title={'Details info'}>Free consultation with our trusted doctors and get the best recomendations</ServiceCard>
                <ServiceCard image_src={'assets/emergency_care_icon.svg'} title={'Emergency care'}>You can get 24/7 urgent care for yourself or your children and your lovely family</ServiceCard>
                <ServiceCard image_src={'assets/tracking_icon.svg'} title={'Tracking'}>Track and save your medical history and health data</ServiceCard>
            </section>
            <Button>Learn more</Button>
        </article>
    );
}

export default Services;