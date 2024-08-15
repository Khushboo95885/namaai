import Link from "next/link";
import styles from "./main.module.scss";
import Image from "next/image";
import Carousel from "../QuoteCarsouel/page";
const items = ["Item 1", "Item 2", "Item 3"];

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Hello World!</h1>
          <h1>I am Aman Kumar.....</h1>
          <p>
            I&apos;m a computer science graduate with a passion for competitive
            programming and creating captivating front-end experiences. My
            expertise extends into the realm of AI, where I work with generative
            AI and fine-tune models to push the boundaries of what&apos;s
            possible. My journey is fueled by the relentless pursuit of coding
            excellence, creative innovation, and a vision to automate everything
            that can be automated. Whether it&apos;s crafting sleek UIs or
            diving into complex algorithms, I&apos;m all about driving forward
            the future of technology.
          </p>
        </div>
        <div className={styles.profiles}>
          <Link href="https://huggingface.co/namaai">
            <Image
              src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
              width={30}
              height={30}
              alt="Developer"
            />
          </Link>
          <Link href="https://github.com/amanyadav721">
            <Image src="/github.png" width={30} height={30} alt="Developer" />
          </Link>

          <Link href="https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQGNmuJFIv3Q6gAAAY3L-s2gQa5YgxMQegfFyDAouWgTHFapdHHwIcaBRgaOtCffh0Wict-OeDq-BdcuMkqmNPqGVShsPSFoGeI4Zg29y1PdJtrjRiQmWcDZVVMC8T67ME9Dxfg=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faman-yadav-9b1811201%2F">
            <Image src="/linkedin.png" width={30} height={30} alt="Developer" />
          </Link>
        </div>
        <div>
          <Image
            src="https://i.pinimg.com/564x/d5/b8/1f/d5b81f5f990dcb7d4d93aef6a701def4.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className={styles.mainimage}
          />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className={styles.projectContainer}>
        <h1>Projects</h1>
        <Image
          src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1493941918.1708099460&semt=sph"
          alt="project-Image"
          width={626} // Adjust width and height as needed
          height={400}
        />
      </div>

      <div className={styles.projectCard}>
        <div className={styles.shiksha}>
          <iframe
            src="https://namaai-hindi-ai.hf.space"
            width="350"
            height="500"
          ></iframe>
        </div>
        <div className={styles.ipl}>
          <iframe
            src="https://namaai-datachat.hf.space"
            width="350"
            height="500"
          ></iframe>
        </div>
        <div className={styles.mock}></div>
        <div className={styles.subscription}>
          <iframe
            src="https://namaai-analyst.hf.space"
            width="350"
            height="500"
          ></iframe>
        </div>
      </div>
      <div className={styles.app}>{/* <Carousel slides={slides} /> */}</div>
    </>
  );
}
