import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

import BackgroundBanner from "../assets/img/imagem-banner.jpg";
import { FavoriteCards } from "../src/components/FavoriteCards";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        {/* Prop Drilling */}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header link={BackgroundBanner.src} />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  .banner {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
function Header({ link }) {
  return (
    <StyledHeader>
      <img className="banner" src={link} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
function Timeline({ searchValue, ...props }) {
  console.log("Dentro do componente", props.playlists);
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(playlistsName);
        // console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

const StyledFooter = styled.div`
  padding: 16px 32px;
`;

function Footer() {
  return (
    <StyledFooter>
      <h2>Favoritos</h2>

      <FavoriteCards />
    </StyledFooter>
  );
}
