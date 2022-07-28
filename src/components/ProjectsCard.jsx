import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
  background-color: var(--bg-alt);

  .icon-wrapper {
    margin-top: 20px;
    gap: 5px;
    font-size: 1.4rem;
    align-items: center;

    i {
      font-size: 1.2rem;
    }
  }
`;
const ProductCards = ({ name, language, desc, date, type = 'github' }) => {
  return (
    <Wrapper>
      <p>{language}</p>
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
          <div className="icon-wrapper flex ai-c">
            <i className="fa-solid fa-code-branch"></i>
            <p>GitHub</p>
          </div>
        ) : (
          <i className="icon-wrapper fas fa-eye"></i>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductCards;
