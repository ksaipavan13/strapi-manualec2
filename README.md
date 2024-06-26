# Strapi Project Deployment on EC2

## Overview

This repository contains a Strapi project that is deployed on an EC2 instance using GitHub Actions for Continuous Deployment. The project has been structured to follow best practices and ensure smooth deployment.

## Directory Structure

.github/
workflows/
deploy.yml
node_modules/
strapi-app/
README.md

## Tasks Performed

1. **Initial Setup:**
   - Created the Strapi project.
   - Set up the project directory and added necessary configurations.

2. **Moving Project Files:**
   - Moved all Strapi project files to the `strapi-app` directory to maintain a clean and organized structure.
   - Updated the GitHub Actions workflow (`deploy.yml`) to reflect the new directory structure.

3. **GitHub Actions Workflow:**
   - Configured GitHub Actions to deploy the Strapi project on EC2 using SSH authentication.
   - Updated the workflow to ensure correct paths after moving project files.

4. **Authentication:**
   - Set up SSH keys for authentication in the GitHub Actions workflow.

## Errors Encountered

1. **Module Not Found Errors:**
   - Encountered errors related to missing modules (`ajv/dist/core` and `assert/strict`).
   - Resolved by adding the required modules to `package.json`.

2. **SSH Authentication Issues:**
   - Faced issues with SSH handshake failure due to authentication problems.
   - Resolved by correctly configuring SSH keys and authentication methods in the workflow.

3. **Directory Structure Issues:**
   - Initially, there were redundant directories (`strapi-ec2-deployment`) that were not needed.
   - Removed the unnecessary directories to maintain a clean structure.

## Final Steps

1. **Removing Redundant Directory:**
   - Removed the `strapi-ec2-deployment` directory as it was not needed.

2. **Successful Deployment:**
   - Successfully deployed the Strapi project on the EC2 instance.
   - The admin panel is accessible, and the project is running as expected.

## Conclusion

This README provides a summary of the tasks performed, the errors encountered, and the steps taken to resolve them. The project is now set up for continuous deployment using GitHub Actions and is deployed on an EC2 instance.

# Trigger Build
