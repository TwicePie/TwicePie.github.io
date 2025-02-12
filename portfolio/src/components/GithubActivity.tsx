import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <div className="p-2">
      <h3 className="text-lg font-semibold mb-2">GitHub Contributions</h3>
      <div className="overflow-x-auto">
        <GitHubCalendar 
          username="TwicePie"
          colorScheme='dark'
          fontSize={10}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
