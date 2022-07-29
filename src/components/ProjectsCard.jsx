import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 40px;
  background-color: var(--bg-alt);
  cursor: pointer;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10px;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  width: 100%;
  margin-bottom: 10px;
  .icon-wrapper {
    margin-top: 16px;
    gap: 5px;
    font-size: 1.4rem;
    align-items: center;

    i {
      font-size: 1.2rem;
    }
  }

  a:hover {
    color: var(--text-white);
  }

  &:hover {
    transform: scale(1.12);
  }

  h4 {
    font-size: 24px;
    line-height: 30px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .language {
    font-size: 10px;
    line-height: 15px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700;
    font-family: 'Ubuntu', sans-serif;
    color: var(--text-alt);
    opacity: 0.97;
  }
`;
const ProductCards = ({
  name,
  language,
  desc,
  date,
  type = 'github',
  link,
}) => {
  return (
    <Wrapper>
      <p className="language">{language}</p>
      <h4>{name}</h4>
      {desc && <p className="description">{desc}</p>}
      <div className="meta">
        {date && (
          <div className="date-meta flex-20 ai-c">
            <p>Last Updated: {date.updatedAt}</p>
            <p>Created At: {date.createdAt}</p>
          </div>
        )}

        {type === 'github' ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="icon-wrapper flex ai-c"
          >
            <i className="fa-solid fa-code-branch"></i>
            <p>GitHub</p>
          </a>
        ) : (
          <i className="icon-wrapper fas fa-eye"></i>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductCards;
