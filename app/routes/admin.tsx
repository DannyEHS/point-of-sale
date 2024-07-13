import type { MetaFunction } from "@remix-run/node";
import CardTopic from "~/components/ui/admin/CardTopic"

import { FaRegUser, } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineSecurity } from "react-icons/md";
import { FaArrowUpRightFromSquare, FaRegNewspaper } from "react-icons/fa6";
import { LiaBarcodeSolid } from "react-icons/lia";
import { RiFolderSharedLine } from "react-icons/ri";
import { RiArchive2Line } from "react-icons/ri";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiShieldCheckLine } from "react-icons/ri";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";


import { Link } from "@remix-run/react";
import TooltipInfo from "~/components/ui/general/TooltipInfo";


export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="m-3 items-center justify-start h-screen w-full">
      <h1 className="flex flex-row items-end mb-3 text-2xl text-[#3d3d3d] dark:text-white">
        <RiAdminLine className="text-[#5a6e8a] mr-1 w-10 h-10"/>
        Administracion
        </h1>
      <div className="grid ">
        <div className="grid grid-cols-3 gap-4 justify-center items-center p-2">
          <Link to="/admin/users">
            <TooltipInfo
              element={
                <CardTopic
                  textTitle="Usuarios"
                  textDescription="Aqui das de alta nuevos usuarios."
                  texContent="Manejo de Usuarios"
                  textFooter="Administrador de usuarios"
                  iconContent={<FaRegUser className="text-[#5a6e8a] mr-3 w-10 h-10" />}
                  iconFooter={<RiFolderSharedLine className="text-[#5a6e8a] mr-3 w-6 h-6" />}
                />
              }
              text="Aqui puedes crear, editar, buscar y eliminar tus usuarios."
            />
          </Link>
          <Link to="/admin/products">
            <TooltipInfo
              element={
                <CardTopic
                  textTitle="Productos"
                  textDescription="Aqui das de alta nuevos productos."
                  texContent="Manejo de Productos"
                  textFooter="Administrador de productos"
                  iconContent={<RiArchive2Line className="text-[#5a6e8a] mr-3 w-10 h-10" />}
                  iconFooter={<RiFolderSharedLine className="text-[#5a6e8a] mr-3 w-6 h-6" />}
                />
              }
              text="Aqui puedes crear, editar, buscar y eliminar tus productos."
            />
          </Link>
          <Link to="/admin/categories">
            <TooltipInfo
              element={
                <CardTopic
                  textTitle="Categorias"
                  textDescription="Aqui das de alta nuevas categorias."
                  texContent="Manejo de Categorias"
                  textFooter="Administrador de categorias"
                  iconContent={<RiDashboardHorizontalLine className="text-[#5a6e8a] mr-3 w-10 h-10" />}
                  iconFooter={<RiFolderSharedLine className="text-[#5a6e8a] mr-3 w-6 h-6" />}
                />
              }
              text="Aqui puedes crear, editar, buscar y eliminar tus categorias."
            />
          </Link>
          <Link to="/admin/rol">

            <TooltipInfo
              element={
                <CardTopic
                  textTitle="Roles y Permisos"
                  textDescription="Aqui generas tus niveles de seguridad."
                  texContent="Manejo de Roles"
                  textFooter="Administrador de roles"
                  iconContent={<RiShieldCheckLine className="text-[#5a6e8a] mr-3 w-10 h-10" />}
                  iconFooter={<RiFolderSharedLine className="text-[#5a6e8a] mr-3 w-6 h-6" />}
                />
              }
              text="Aqui puedes crear, editar, buscar y eliminar tus roles, ademas de otorgarles permisos sobre la aplicacion."
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Reportes"
              textDescription="Aqui generas tus todos tus reportes."
              texContent="Manejo de reportes."
              textFooter="Administrador de reportes"
              iconContent={<RiGitRepositoryLine className="text-[#5a6e8a] mr-3 w-10 h-10" />}
              iconFooter={<RiFolderSharedLine className="text-[#5a6e8a] mr-3 w-6 h-6" />}
            />
          </Link>
          <Link to="/">
            <CardTopic
              textTitle="Codigo de barras"
              textDescription="Aqui generas tus codigos de barras."
              texContent="Codigo de barras"
              textFooter="Crear codigo de barras"
              iconContent={<RiBarcodeBoxLine className="text-[#5a6e8a] mr-3 w-10 h-10" />}
              iconFooter={<FaArrowUpRightFromSquare className="text-[#5a6e8a] mr-3 w-6 h-6" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
