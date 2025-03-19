// name: Deploy to EC2

// on:
//   push:
//     branches:
//       - main  # Triggers deployment when code is pushed to the main branch

// jobs:
//   deploy:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Checkout Repository
//         uses: actions/checkout@v2

//       - name: Deploy to EC2
//         uses: appleboy/ssh-action@v0.1.10
//         with:
//           host: ${{ secrets.EC2_HOST }}
//           username: ubuntu
//           key: LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBcmtwUGpCTlp4UXVpYnJXRm9LNWJFekgxc2pJdlNDMUNaVEZMcUtzU3FzRkhWcW9tCmJUYVhoSkU3UURHYTAyeWFVQU5sQWl4V2dONG10K0dRTEg1TFVUNFE3bkJBZG1LeVFpRjJhbVdOL2ZUcjc3dFQKczBpalNqTXBYQnBIYmo0UlNTRjdCY3BRSG02bWcyVnRtWW96NTYvbXlMaGZXWVhCQjFQZDJVSHhYMDFWaWpnUgpSUVpEeXN1SWRHYUV5VmpIQUlwK1BHaHRYSmdtYWJlTXNmcGNnMzJWNUxNeDRMcFFTSE9ERE9pT21CVm9SNEYxCllsN3Y3Ni9GTVp2azdrMFhqQlBMUXhaTGt2S1lhL1NJMUI0aGZXMjlRTkZidFRLNFlxR2F5KzNXOFBzK014K1IKMXY5L2NFZG1HTytDek9LY1hDYnk0OGdjaFJUZWtSdVdwRGgzUVFJREFRQUJBb0lCQUJzT2tqYk9zanJ5eVc2aQpZM0pFWHdNbDJGeW5pY3VNcXlnR2RSWmtLR3Uxd1p0a29yNkZvUlFGYjh0UmFCVzJZR1pYZ0pETHpVb0lNcjZOCkY5S3djSVRXTzg2b1FubWViTW56WSt5MGcweVBmeWtpVGFZaGVxZ0VOVUdGR3QyMGFQNlBZZ2ZPRm80QzQzcTIKZmtNOXZ6MFNnNk5aYkFQN3piR1RoWGM2MDN2VnhjUE1CR3c3Q1FETldUNHVtNko2SkRIbkM3L1dKWWsxZUIyegpsSUpvL2NmY3RQTGF6OW1VQ093V1dCbldlOWpuSHkrL0JmcUxYRWJycSt4UlNHaXU2NGlBRE5zQTVCR3l3ellLCjFMQ09CenM4dVpLM1grdEhDQTdNOGRjSTVpaXhueHhCRVlXd0g0c2FvaEJ2bmhGZnE4cXZ5OHlqZmJCYjNGbnAKeHd3RG9ma0NnWUVBNWtDUUovZ1oxckdYR3JUOVVSb3hEL2JoU2R0RngvZHRZZ0ZFU2IvTDlHSitFR01tRkZhMgpWUEhMTkQwdEJ4TTJ1T3RDN084RkV5WWRzY2UwY1NLNnVTQkpRRnJQN0w4M1FCS2E3VFpNWkExSng3UThSMy9zCjgzckYrVTN3Qk96RS9YWDZHY2ZhV2tHOTV2NVZpWDQ2cFZHaTltWlBYUXpBcEtpb0hCVFhRNzhDZ1lFQXdjZTUKVVdwVG5FR29INDR5amVOeW9ZeFNkRVRuN3U5dTM0RGRmYXkvQ0w0bUdaSkQwMDBHZkVRMDlhNjBmZXdwVUZONwppSFlpcjdDUGlkUEJseExNTDZKTmpaa3IzM0Q1ZVFvamNNRnVUZkFRNm9yTUVVWGJERVVWYi9rM25PODdjUFBsCkR6YnBCdWZ0ZGl0cTlVNkMvMkxMZkNidWY2bWJubHh5QzZhREJQOENnWUVBaXZLNVM3VjMra3l2VUNtYW1OL0MKYmN6aFJZMnlmYXI5OGwrclV3b1FUWWxHWkNOQkxwTHBjemQ3RmlvNHl3VTRSNzJKWkt3VkZ1b3dqMEZoemNoVQpnRFZRbnlwdVFZTmZGeVpqSWZWYmdpRld2ZEl4Y2tCcndMNzlTNlpSeXRjTFJaMTFjU3RleElyWnk5VDl6M3hDCmJkTm5FV1RLVGUvTkxWQ3VLa3dWWDhjQ2dZQnJMbVpCTXZkbUVTYkZ0V2dlOVBRZGlMaSttTEpVaFZpbEJPajkKcjBQR3VTM25yUEFZK3B5Z3RUVTV3dFVRWlVTQXFueEVnVnMwSkF0d3A1Q0hXQjFhSjRLUDFHM2cyK01RNE51egpiVG51bjk4cmEzUHVCZDVmemdKS2VlVVp4M1R3UithbFlMREpZaFVFN0lUdmcrcVBDWDBWZ1k4ZlM1Zklvc2R0CnpEN2h6d0tCZ0M4bk9jOG1YZzNjYmJ2dk1md0tzMUQycjRXdjhSdHM4SHJpbjFnWWYza1BFak5EWXNjV2pjUk0KeGNsVkw4cFdQdWNqcmFveko2Z1hmTmQ0ZWxIY1RyU0VNSXNudTdBQW1OcWhGNGxTd1A3WmF1cHNSYmhNVW5uMgppK1lETXR4bERobmtuaXFIL1grQUJHT3hPVHpOU2E1ejNzaGtNK3ZlYmFURm00MUFySHN5Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t
//           script: |
//             echo "Connecting to EC2 instance..."

//             # Change to the project directory
//             cd express-mongoose-docker || { echo "Directory not found!"; exit 1; }

//             # Pull the latest changes
//             echo "Pulling latest changes from GitHub..."
//             git pull origin main || { echo "Git pull failed!"; exit 1; }

//             # Stop and remove existing containers
//             echo "Stopping running containers..."
//             docker-compose down || { echo "Failed to stop containers"; exit 1; }

//             # Rebuild and start containers
//             echo "Building and starting Docker containers..."
//             docker-compose up -d --build || { echo "Docker build failed!"; exit 1; }

//             # Restart Nginx to apply changes
//             echo "Restarting Nginx..."
//             sudo systemctl restart nginx || { echo "Failed to restart Nginx"; exit 1; }

//             echo "Deployment successful! 🚀"
