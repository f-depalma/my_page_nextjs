import Header from "../Header";
import MyProjects from "./MyProjects";
import ErrorBoundary from "../error-boundary";

export default function MyProjectsMain() {
    return (
        <main>
            <Header />
            <ErrorBoundary>
                <MyProjects />
            </ErrorBoundary>
        </main>
    )
}