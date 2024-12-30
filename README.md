# DemoApp Project

This project is a Node.js application that is built, tested, and deployed using Jenkins, Ansible, and Docker. Below are the details about the stack, steps, and commands to launch the application.

## Stack

- **Node.js**: JavaScript runtime for building the application.
- **Ansible**: Configuration management tool used to automate application rebuilding and deployment.
- **Docker**: Containerization platform to run the application in a containerized environment.
- **GitHub Actions**: CI/CD tool for automating the build and deployment pipeline.
- **Jenkins**: CI tool for running jobs such as build, tests, and analysis.
- **SonarQube**: Code quality analysis tool.

## Steps to Run the Application

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/siwar2/DemoApp.git
    cd DemoApp
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Build the Application**:
    ```bash
    npm run build
    ```

4. **Run the Application Locally with Docker**:
    - **Build the Docker image**:
      ```bash
      docker build -t demoapp .
      ```

    - **Run the Docker container**:
      ```bash
      docker run -d -p 3000:3000 demoapp
      ```

    - Access the app at `http://localhost:3000`.

## Deployment Automation

The application is automatically rebuilt and deployed whenever a pull request is merged into the `main` branch using **Ansible** and **GitHub Actions**.

### GitHub Actions Workflow

The workflow performs the following tasks:
- **Build**: Builds the Node.js application.
- **Run Ansible Playbook**: Rebuilds and restarts the application on the remote server using the Ansible playbook.
- **Send Email Notification**: After a successful merge to the `main` branch, an email notification is sent.

### Ansible Playbook

The `rebuild.yml` playbook automates the following tasks:
- Pulling the latest code from the GitHub repository.
- Installing dependencies.
- Rebuilding the application.
- Restarting the application.

### To trigger the rebuild:
1. Merge your PR into the `main` branch.
2. GitHub Actions will automatically trigger the workflow and rebuild the application.

## Running Jenkins

Jenkins is used for CI/CD in this project. Ensure the Jenkins server is set up and configured to run builds on each commit or pull request.

## License

This project is licensed under the MIT License.
