
export default function Section({ visibility, children }) {
    return (
        <section className="fixed left-0 pt-24 top-0 h-full w-screen"
            style={visibility.getCss()}>
            {children}
        </section>
    )
}