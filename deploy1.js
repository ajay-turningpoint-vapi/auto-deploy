// # name: Deploy to EC2

// # on:
// #   push:
// #     branches:
// #       - main  # Triggers deployment when code is pushed to the main branch

// # jobs:
// #   deploy:
// #     runs-on: ubuntu-latest

// #     steps:
// #       - name: Checkout Repository
// #         uses: actions/checkout@v2

// #       - name: Connect to EC2
// #         uses: appleboy/ssh-action@v0.1.10
// #         with:
// #           host: ${{ secrets.EC2_HOST }}
// #           username: ubuntu
// #           key: ${{ secrets.EC2_SSH_KEY }}
// #           script: |
// #             echo "Successfully connected to EC2 instance!"
