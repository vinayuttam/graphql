import React from 'react';
import { gql, graphql } from 'react-apollo';

const Loading = () => <p>Loading...</p>
const TasksContainer = ({ data: { loading, tasks } }) => {
  return (
    <div>
      {loading && <Loading />}
      <ul>
        {!loading && tasks.map((task, index) => {
          return <li key={index}>{task.title}</li>
        })}
      </ul>
    </div>
  )
};

const getUserTasks = gql`
  query getUserTasks {
    tasks: Tasks {
      id
      title
      description
      completed
    }
  }
`;

export default graphql(getUserTasks)(TasksContainer)
