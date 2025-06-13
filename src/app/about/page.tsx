import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col outline-1 mx-10 items-center pb-20 gap-8 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl font-bold qalex-title">About Me</h1>
            <div className="flex flex-col sm:flex-row gap-8 mt-8">
                <Image
                    src="https://storage.googleapis.com/qrius-portfolio-assets/images/misc/qrius-alex-profile-pic.jpg"
                    alt="Alex"
                    width={250}
                    height={250}
                    className="rounded-lg flex-1"
                />
                <p className="text-lg max-w-2xl flex-3">
                    My name is Daquaris Alexander Chadwick and I am a professional Software Engineer, that leans full-stack, with a passion for learning and building things. I&apos;ve been working in the industry for around 8 years now, but I&apos;ve been developing software for much longer than that. I started out in my school&apos;s robotics club, where I learned how to program in C++. Since then, I have been enamored with the art of software development and have been honing my skills ever since. I&apos;ve worked on a variety of projects, from small personal projects to applications that millions of people use to this day, and I&apos;ve loved every minute of it. I&apos;m always looking for new challenges and opportunities to learn and grow as a developer.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mt-8">
                <span>
                    <h3 className="text-2xl font-semibold mt-8">My Skills</h3>
                    <hr/>
                    <ul className="list-disc list-inside max-w-2xl mt-2">
                        <li>JavaScript/TypeScript</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Kotlin</li>
                        <li>C#</li>
                        <li>React</li>
                        <li>Photoshop</li>
                    </ul>
                </span>
                <span>
                    <h3 className="text-2xl font-semibold mt-8">My Interests</h3>
                    <hr/>
                    <ul className="list-disc list-inside max-w-2xl mt-2">
                        <li>Web Development</li>
                        <li>Game Development</li>
                        <li>Software Engineering</li>
                        <li>Music</li>
                        <li>Creation</li>
                    </ul>
                </span>
            </div>
        </div>
);
}