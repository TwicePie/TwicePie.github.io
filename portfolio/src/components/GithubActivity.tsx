import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">GitHub Contributions</h3>
      <div className="overflow-x-auto">
        <GitHubCalendar 
          username="TwicePie"
          colorScheme='dark'
          fontSize={12}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
