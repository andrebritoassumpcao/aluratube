import styled from "styled-components";
import config from "../../config.json";

const StyledFavoriteCards = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    color: #141414;
    gap: 8px;
    > span {
      font-size: 14px;
      font-weight: 400;
    }
    &:visited {
      color: #3957c2;
    }
  }
  img {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export function FavoriteCards({}) {
  const favorites = config["favorites-cards"];

  return (
    <StyledFavoriteCards>
      {favorites.map((card, index) => {
        return (
          <a
            href={`https:///github.com/${card.github}`}
            target="_blank"
            key={index}
          >
            <img
              src={`https://github.com/${card.github}.png`}
              alt={card.github}
            />
            <span>@{card.github}</span>
          </a>
        );
      })}
    </StyledFavoriteCards>
  );
}
