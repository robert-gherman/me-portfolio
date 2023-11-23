import Landing from './landing';
import Skills from './skills';
import Work from './work';
import Projects from './projects';

const HomePage = (): JSX.Element => {
    return (
        <>
            <div className="bg-blue pt-28 max-w-full overflow-x-hidden">
                <Landing />
                <Skills />
                <Work />
                <Projects />
            </div>
        </>
    );
};

export default HomePage;
