# pdfViewer 

## Description

The PDF Viewer Project is a modern web application built using React that allows users to view and navigate PDF documents directly in their browsers. This application is tailored for both administrators and viewers, providing distinct functionalities to enhance the user experience. The integration of Firebase ensures real-time updates and synchronization, making it ideal for collaborative environments.

## Key Features

- **Interactive PDF Viewer**: Users can easily view PDF documents with options to zoom in/out and navigate between pages.
- **Real-Time Page Synchronization**: Admins can change the current page, and this change will be reflected in real-time for all viewers connected to the document.
- **Role-Based Access**: The application differentiates between admin and viewer roles, allowing admins to manage document navigation while viewers can only view.
- **Firebase Firestore Integration**: The current page state is stored in Firestore, enabling real-time updates and persistent storage.
- **Responsive Design**: The application is designed to be mobile-friendly, ensuring a seamless experience on various devices, including tablets and smartphones.
- **User -Friendly Interface**: The layout is clean and intuitive, making it easy for users of all technical levels to navigate the PDF viewer.
- **Customizable Styles**: The application allows for easy customization of styles, enabling developers to adjust the look and feel to match their branding.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, enabling a component-based architecture.
- **Firebase**: A comprehensive platform for developing web applications, providing authentication, Firestore database, and storage solutions.
- **PDF.js**: A powerful library for rendering PDF documents in web applications, allowing for high-quality viewing experiences.

## Features in Action

- **Admin Mode**: As an admin, you can navigate through the PDF document, and any changes will be updated in real-time for all viewers.
- **Viewer Mode**: As a viewer, you can see the document but cannot change the page. Your view will update automatically if the admin changes the page.