import type { MetaFunction } from "@remix-run/node";
import CardTopic from "~/components/ui/admin/CardTopic"

import { FaRegUser, } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineSecurity } from "react-icons/md";
import { FaArrowUpRightFromSquare, FaRegNewspaper } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { LiaBarcodeSolid } from "react-icons/lia";

import { Link } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="m-3 items-center justify-start h-screen w-full">

      <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">Welcome to administration</h1>

      <div className="grid ">
        <div className="grid grid-cols-3 gap-4 justify-center items-center p-2">
          <Link to="/">
            <CardTopic
              textTitle="Usuarios"
              textDescription="Aqui das de alta nuevos usuarios."
              texContent="Manejo de Usuarios"
              textFooter="Administración de usuarios"
              iconContent={<FaRegUser className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Productos"
              textDescription="Aqui das de alta nuevos productos."
              texContent="Manejo de Productos"
              textFooter="Agregar nuevo producto"
              iconContent={<CiBoxes className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Categorias"
              textDescription="Aqui das de alta nuevas categorias."
              texContent="Manejo de Categorias"
              textFooter="Agregar nueva categoria"
              iconContent={<MdOutlineCategory className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Roles y Permisos"
              textDescription="Aqui generas tus niveles de seguridad."
              texContent="Manejo de Roles"
              textFooter="Agregar nuevo rol"
              iconContent={<MdOutlineSecurity className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Reportes"
              textDescription="Aqui generas tus todos tus reportes."
              texContent="Manejo de reportes."
              textFooter="Revisar reportes"
              iconContent={<FaRegNewspaper className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Editar app"
              textDescription="Aqui cambias la estetica de la pagina."
              texContent="Estilos y colores"
              textFooter="Cambiar estilos"
              iconContent={<LuMonitorSmartphone className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Generar codigo de barras"
              textDescription="Aqui generas tus codigos de barras."
              texContent="Codigo de barras"
              textFooter="Crear codigo"
              iconContent={<LiaBarcodeSolid className="mr-3" />}
              iconFooter={<FaArrowUpRightFromSquare className="mr-3" />}
            />
          </Link>
        </div>
      </div>
    </div>


  );
}
