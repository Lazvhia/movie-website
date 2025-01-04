export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4">
      <h1 className="text-2xl font-medium text-purple-500">About</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        {/* Gambar di sebelah kiri */}
        <img 
          src="/images/me3.jpg" // Perbaiki path gambar
          alt="Profile" 
          className="w-40 h-40 object-cover rounded-full shadow-md"
        />
        {/* Konten teks di sebelah kanan */}
        <div className="flex-1 space-y-4">
          <p>
            Hi there! 👋
            <br />
            I’m a software engineer with a passion for creating innovative solutions that 
            make a positive impact on people’s lives. I have a strong background in 
            computer science and have been working in the tech industry for over a decade.
          </p>

          <p>
            With hands-on experience in front-end technologies and certifications in Python 
            programming, data visualization, and web development, I have built a solid 
            foundation in crafting visually appealing and functional web solutions.

            Beyond coding, I enjoy exploring creative hobbies like designing wallpapers 
            and diving into new challenges that push my skills further. 
            Whether it’s simplifying complex ideas through technical writing or building 
            impactful web applications, I’m always striving to deliver quality and innovation.
          </p>

          <p>
            Currently, I’m focusing on enhancing my skills in PHP, Laravel, 
            and React.js, as well as mastering relational databases.
          </p>
        </div>
      </div>
    </div>
  );
}
