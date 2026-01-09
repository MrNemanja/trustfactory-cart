Simple E-commerce Shopping Cart (Laravel + React)


Overview

A simple e-commerce shopping cart where authenticated users can browse products, add them to a cart, remove them from cart, update quantities and complete purchases. Stock management, low stock notifications, and daily sales reports are implemented.


Tech Stack

- Backend: Laravel 12
- Frontend: React (Inertia.js)
- Styling: Tailwind CSS
- Database: SQLite
- Auth: Laravel Starter Kit (Inertia + React)
- Queues: Laravel Queue (database driver)
- Scheduler: Laravel Scheduler
- Mail: Log mailer


Features

- Shopping Cart: add, update, remove products; user-specific
- Stock Management: prevents buying more than available, updates stock on checkout
- Low Stock Notification: sends email to dummy admin when stock is below threshold
- Daily Sales Report: scheduled job sends admin report of all products sold that day


Local Setup - In your terminal run this

- git clone https://github.com/MrNemanja/trustfactory-cart
- cd project
- composer install
- npm install
- cp .env.example .env
- php artisan key:generate
- php artisan migrate
- npm run build
- php artisan serve


Run queues & scheduler in separate terminals:

- php artisan queue:work
- php artisan schedule:work


Notes

Emails are logged in storage/logs/laravel.log for testing