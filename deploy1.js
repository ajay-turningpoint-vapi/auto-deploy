// name: Deploy to EC2

// on:
//   push:
//     branches:
//       - main

// jobs:
//   deploy:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Checkout Repository
//         uses: actions/checkout@v2

//       - name: Set up SSH and Deploy
//         uses: appleboy/ssh-action@v0.1.10
//         with:
//           host: ${{ secrets.EC2_HOST }}
//           username: ubuntu
//           key: ${{ secrets.EC2_SSH_KEY }}
//           script: |
//             # Mark the repo as safe for Git
//             git config --global --add safe.directory /var/www/auto-deploy

//             # Navigate to the project directory
//             cd /var/www/auto-deploy || exit

//             # Pull the latest changes from GitHub
//             sudo -u ubuntu git pull origin main

//             # Stop and remove old containers
//             sudo docker-compose down

//             # Remove unused Docker images to free up space
//             sudo docker system prune -af

//             # Build and restart containers
//             sudo docker-compose up -d --build

//             # Restart Nginx to apply changes
//             sudo systemctl restart nginx

//             # Verify running containers
//             sudo docker ps -a
