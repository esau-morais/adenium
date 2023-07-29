import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-center small:items-end small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Novas variedade e mudas em breve
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Descubra nossa mais recente coleção de Rosas do Deserto (Adenium) para
          aprimorar seu estilo de jardinagem.
        </p>
        <UnderlineLink href="/store">Explorar</UnderlineLink>
      </div>
      <Image
        src="/main.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="object-cover object-left-top absolute inset-0 opacity-90 mix-blend-darken"
        draggable="false"
        fill
        sizes="100vw"
      />
    </div>
  )
}

export default Hero
