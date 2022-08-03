import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  gap: 10px;

  .role-wrapper {
    position: relative;
    gap: 20px 5px;
    flex-wrap: wrap;

    p {
      background-color: rgba(101, 101, 103, 0.3);
      border-radius: 20px;
      padding: 0 15px;
    }
  }
`;

const Experience = ({ name, role, duration }) => {
  return (
    <Wrapper className="flex jc-sb ai-s f-c">
      <h4>{name}</h4>
      <div className="role-wrapper flex-20">
        {role.map((item, n) => (
          <p key={n}>{item}</p>
        ))}
      </div>
      <p>{duration}</p>
    </Wrapper>
  );
};

Experience.propTypes = {
  name: PropTypes.string,
  role: PropTypes.array,
  duration: PropTypes.string,
};

export default Experience;
