## Car Wash Booking System Backend

## Key Features
 - Authentication: The application is secured by JWT authentication method
 - Authorization: Only authorized person can access the protected resources

 ## Models
  - User: name, email, password, phone, role, address
  - Service: name, description, price, duration, isDeleted
  - Slot: service, date, startTime, endTime, isBooked
  - Booking: customer, service, slot, vehicleType, vehicleBrand, VehicleModel, manufacturingYear, 
             registrationPlate

 ## API Endpoints
    1. Sign Up: (POST) /api/auth/signup
    2. Sign In: (POST) /api/auth/login
    3. Create service: (POST) /api/service (Only accessible to the Admin)
    4. Get a service: (GET) /api/service/:id
    5. Get All service: (GET) /api/services
    6. Update service: (PUT) /api/services/:id (Only Accessible to the Admin)
    7. Delete A service: (DELETE) [SOFT DELETE] /api/services/:id (Only Accessible to the Admin)
    8. Create slot: (POST) /api/services/slots (Accessible to the Admin)
    9. Get available slots: (GET) /api/slots/availability
   10. Book a service: (POST) /api/bookings (Only Accessible by User)
   11. Get all bookings: (GET) /api/bookings (Only Accessible by Admin)
   12. Get user's bookings: (GET) /api/my-bookings (Only Accessible by User)

   ## How to run the application locally

     1. Clone the repository
  ```
  https://github.com/Khairul-islam98/Car-Wash-Booking-System-Backend.git
  ```
  2. Project open
  ```
  cd Car-Wash-Booking-System-Backend

  ```
  3. install the required packages
  ```
  npm i
  ```
  4. Add a .env file
  ```
  PORT=
  DATABASE_URL=
  BCRYPT_SALT_ROUNDS=
  JWT_ACCESS_SECRET=
  JWT_ACCESS_EXPIRES_IN=
  ```
  5. Run the Application locally
  ```
  npm run start:dev
  ```

    
    