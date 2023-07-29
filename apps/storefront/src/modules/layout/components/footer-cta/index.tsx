import UnderlineLink from "@modules/common/components/underline-link"
import ArrowRight from "@modules/common/icons/arrow-right"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-amber-100 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">
            Aprenda a arte do cultivo de Rosas do Deserto
          </h3>
          <div className="flex items-center mt-6">
            <a
              className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1"
              href="https://pay.hotmart.com/P46193491R"
              target="_blank"
              rel="noreferrer"
            >
              Comprar curso
              <ArrowRight
                size={20}
                className="transition-all group-hover:ml-2 duration-300"
              />
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/cta.jpg"
            alt=""
            className="absolute inset-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
