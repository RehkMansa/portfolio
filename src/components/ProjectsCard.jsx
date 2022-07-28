import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
  background-color: var(--bg0-alt);
`;
const ProductCards = ({ name, language, desc, date, type = 'github' }) => {
  return (
    <Wrapper>
      <p>{language}</p>
      <h4>{name}</h4>
      {desc && <p className="description">{desc}</p>}
      {date && (
        <div className="date-meta">
          <p>Last Updated {date.updatedAt}</p>
          <p>Created At {date.createdAt}</p>
        </div>
      )}

      {type === 'github' ? (
        <i className="fa-solid fa-code-branch"></i>
      ) : (
        <i className="fas fa-eye"></i>
      )}
    </Wrapper>
  );
};

export default ProductCards;
