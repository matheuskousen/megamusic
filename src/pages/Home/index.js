import React, { useState } from "react";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Playlist from "../components/Plyalist";
import Video from "../components/Video";

export default function Home() {
  const [isVideo, isSetVideo] = useState(null);
  return (
    <Container>
      <Grid>
        <Video isVideo={isVideo} />
        <Playlist isSetVideo={isSetVideo} />
      </Grid>
    </Container>
  );
}
