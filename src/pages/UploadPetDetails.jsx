import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './UploadPetDetails.module.css';

function UploadPetDetails() {
    const [formData, setFormData] = useState({
        petName: '',
        petType: '',
        age: '',
        description: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container className={styles.container}>
            <h2 className={styles.headerTitle}>Upload Pet Details</h2>
            <Form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="petName" className={styles.formLabel}>Pet Name</label>
                    <input
                        type="text"
                        name="petName"
                        id="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="petType" className={styles.formLabel}>Pet Type</label>
                    <input
                        type="text"
                        name="petType"
                        id="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="age" className={styles.formLabel}>Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="petType" className={styles.formLabel}>Breed</label>
                    <input
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="description" className={styles.formLabel}>Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className={styles.formControl}
                    ></textarea>
                </div>
               


                <div className={styles.formGroup}>
                    <label htmlFor="image" className={styles.formLabel}>Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleFileChange}
                        required
                        className={styles.formControlFile}
                    />
                </div>

                <Button variant="primary" type="submit" className={styles.btnPrimary}>
                    Submit
                </Button>
            </Form>
            <div className={styles.aboutSection}>
                <h3 className={styles.aboutTitle}>About ADOPET</h3>
                <p className={styles.aboutText}>Welcome to ADOPET, where we connect loving homes with pets in need. Upload your pet details to find them a new home.</p>
            </div>
        </Container>
    );
}

export default UploadPetDetails;
