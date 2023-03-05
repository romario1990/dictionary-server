<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Project architecture

<p align="center">
  <img src="https://app.diagrams.net/#G12Ms2Uq-KppcjZ_Olrz0HchNZJw7hEzW7" />
</p>

### Built With



1. Install [docker](https://www.docker.com/)
2. Install [docker-compose](https://www.docker.com/)
3. Create container - Front
   ```sh
    cd service
    docker build -t front .
    docker run --name front front
   ```
4. Create container - Server
   ```sh
    cd dictionary
    docker build -t server .
    docker run -p 5000:5000 --name service service

   ```
5. Execute docker-compose
    ```sh
    docker-compose up -d
    ```

<p align="right">(<a href="#top">back to top</a>)</p>





