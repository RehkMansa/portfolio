import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div``;

const Experience = ({ name, role }) => {
  return (
    <Wrapper className="flex jc-sb ai-c">
      <p>{name}</p>
      <div className="role-wrapper">
        {role.map((item, n) => (
          <span key={n}>{item}</span>
        ))}
      </div>
    </Wrapper>
  );
};

Experience.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
};

export default Experience;
