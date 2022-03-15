import { Box, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import "./Recommanded.css";
import VideoCard from "./VideoCard";

function Recommanded() {
  return (
    <Box padding={2}>
      <Box marginBottom={4}>
        <Typography gutterBottom>
          TOP <b>LIVE EVENTS</b> FROM{" "}
          <b>
            <u>DATA SCIENCE</u>
          </b>{" "}
          WORLD
        </Typography>
        <Grid container>
          <Grid item>
            <VideoCard
              title="Updated Skills For Data Science Based On Experience"
              views=""
              timestamp="01:20:00"
              channelImage=""
              channel="Krish Naik"
              image="https://pbs.twimg.com/profile_images/1377878658216468487/KvRnbzEd_400x400.jpg"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="Learn Data Science Tutorial-
          Full Course for Beginners"
              views=""
              timestamp="00:20:00"
              channelImage=""
              channel="FreeCodeCamp.org-datalabcc"
              image="https://stringfixer.com/files/217306236.jpg"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="What REALLY is Data
          Science?Told by a Data Sc..."
              views=""
              timestamp="02:20:00"
              channelImage=""
              channel="Joma Tech"
              image="https://i.ytimg.com/vi/Z0N7vqSgRBY/hqdefault.jpg"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="How I Would Learn Data
             Science(If I Had to Start..."
              views=""
              timestamp="00:40:00"
              channelImage=""
              channel="Ken Jee"
              image="https://365datascience.com/resources/courses/219_course-card-image-starting-a-career-in-data-science.jpg"
            />
          </Grid>
        </Grid>
        <Button color="primary">SEE MORE</Button>
      </Box>
      <Box marginBottom={4}>
        <Typography gutterBottom>
          TOP <b>LIVE EVENTS</b> FROM{" "}
          <b>
            <u>SOFTWARE ENGINEERING</u>
          </b>{" "}
          WORLD
        </Typography>
        <Grid container>
          <Grid item>
            <VideoCard
              title="Stop Combining Strings The Old Way"
              views=""
              timestamp="02:20:00"
              channelImage=""
              channel="Web Dev Simplified"
              image="https://i.ytimg.com/vi/UHMnq3PLPYQ/maxresdefault.jpg"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="Build Modern Cryptopunk
          Clone with React.js and Web 3.O"
              views=""
              timestamp="05:20:00"
              channelImage=""
              channel="Clever Programmer"
              image="https://i.scdn.co/image/ab67656300005f1fc84a3f8f5ba7789fdd3ecc8f"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="Metaverse WEB 3.O
          React.js Challenge| ultima..."
              views=""
              timestamp="05:20:00"
              channelImage=""
              channel="Sonny Sangha"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5GmwKRNuSuCUSPZUdIbYVoVW3CnbqJgPEQ&usqp=CAU"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="How I Use Sass and BEM
          class names when..."
              views=""
              timestamp="00:30:00"
              channelImage=""
              channel="Coder Coder"
              image="https://yt3.ggpht.com/Zvmoto3QRSsF2-ZR_gEGUmSXowmImCgPXE1eNn-hRWE9I9UGYjWYbzGaP--8ogvhqjb5tQXL8luY0vM=s640-c-fcrop64=1,00002725ffffd8da-nd-v1"
            />
          </Grid>
        </Grid>
        <Button color="primary">SEE MORE</Button>
      </Box>
      <Box marginBottom={4}>
        <Typography gutterBottom>
          TOP <b>LIVE EVENTS</b> FROM{" "}
          <b>
            <u>FINANCE AND INVESTMENT</u>
          </b>{" "}
          WORLD
        </Typography>
        <Grid container>
          <Grid item>
            <VideoCard
              title="1 stock,100%| 
          Multibagger stock finding..."
              views=""
              timestamp="00:50:30"
              channelImage=""
              channel="Akshat Shrivastava"
              image="https://i.ytimg.com/vi/YhFOhoFL9sY/hq720_2.jpg?sqp=-oaymwEkCJYDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLAMJaoXvP7Vb85kI2_S7cQWae8j2A"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="You can be a CROREPATI
          Ivesting with 20,000 salar..."
              views=""
              timestamp="00:40:00"
              channelImage=""
              channel="Let's Make You Rich "
              image="https://yt3.ggpht.com/aqb5GAov8Go5EgkAnpszbVbuHSPXR5Gb_ZjfleU_ar7D7Wz4ome1pCIocGvQQ7c9mwUvdEhkwQ=s900-c-k-c0x00ffffff-no-rj"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="Best Personal Finance 
          Strategies for 2021|How..."
              views=""
              timestamp="02:20:00"
              channelImage=""
              channel="Ankur Warikoo "
              image="https://media-exp1.licdn.com/dms/image/C4E03AQEgSt8OUmTwrA/profile-displayphoto-shrink_200_200/0/1639400878210?e=1647475200&v=beta&t=V7aRA2d1Gs3xnzUjO9rW7OPjJAQ4zYihsswHxGEkgdg"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="Top four blogging websites to
          learn Personal Finance and..."
              views=""
              timestamp="01:20:00"
              channelImage=""
              channel="Finlight "
              image="https://media-exp1.licdn.com/dms/image/C560BAQEdKkoQLdfFww/company-logo_200_200/0/1589282965626?e=2159024400&v=beta&t=lpglia9limZZZO5ngx65Nl7FPs-CdUNnCTjKZzx4_Js"
            />
          </Grid>
        </Grid>
        <Button color="primary">SEE MORE</Button>
      </Box>
      <Box marginBottom={4}>
        <Typography gutterBottom>
          TOP <b>LIVE EVENTS</b> FROM{" "}
          <b>
            <u>ENTREPRENEURSHIP</u>
          </b>{" "}
          WORLD
        </Typography>
        <Grid container>
          <Grid item>
            <VideoCard
              title="Limited-Edition Empathy
          wines and VeeFriends..."
              views=""
              timestamp="04:26:00"
              channelImage=""
              channel="GaryVee"
              image="https://i.ytimg.com/vi/MvOJcbOIgak/frame0.jpg"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="How To Start A MILLION
            DOLLAR Startup-Step..."
              views=""
              timestamp="02:10:00"
              channelImage=""
              channel="BeerBiceps "
              image="https://beerbiceps.com/wp-content/uploads/2020/11/adesignguy-beerbiceps-632x1024.png"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="Joe Rogan Experience #1309
            -Naval ravikant"
              views=""
              timestamp="10:40:00"
              channelImage=""
              channel="PowerfulJRE "
              image="https://pbs.twimg.com/profile_images/3688210272/e65256ce35a7de1a505426af6d9bb27c_400x400.png"
            />
          </Grid>
          <Grid item>
            <VideoCard
              title="The Power of an 
            Entrepreneurial Mindset..."
              views=""
              timestamp="01:20:00"
              channelImage=""
              channel="TEDx Talks "
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3UNHB7Cbjmsn1ztoOZd37DMKvVXSoyOEew&usqp=CAU"
            />
          </Grid>
        </Grid>
        <Button color="primary">SEE MORE</Button>
      </Box>
    </Box>
  );
}

export default Recommanded;
