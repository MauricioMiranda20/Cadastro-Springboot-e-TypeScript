// e esse na: page.tsx

"use client"
import {createPost} from "./lib/postCadastro";
import { useState }from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    sobrenome: '',
    email: '',
    cep: '',
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createPost(formData);
      console.log("Usuário criado:", result);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) { 
      alert("Erro ao cadastrar usuário");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(formData);
  
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
    return (
      <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact sales</h2>
          <p className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
        </div>
        <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                Nome
              </label>
              <div className="mt-2.5">
                <input
                  value={formData.name} 
                  onChange={handleChange}
                  id="first-name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                Sobrenome
              </label>
              <div className="mt-2.5">
                <input
                  value={formData.sobrenome} 
                  onChange={handleChange}
                  id="last-name"
                  name="sobrenome"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  value={formData.email} 
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm/6 font-semibold text-white">
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                  </div>
                  <input
                    value={formData.phone} 
                    onChange={handleChange}
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Cep" className="block text-sm/6 font-semibold text-white">
                Cep
              </label>
              <div className="mt-2.5">
                <input
                  value={formData.cep} 
                  onChange={handleChange}
                  id="cep"
                  name="cep"
                  type="cep"
                  autoComplete="cep"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  maxLength={8}
                />
              </div>
            </div>
            
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                  <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-400">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold whitespace-nowrap text-indigo-400">
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    )


}

  // return (
  //   <div> 
  //     <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto p-4 border rounded-lg shadow bg-amber-800">
  //       <label>Nome</label>
  //       <input value={formData.name} onChange={handleChange} className="bg-indigo-500 hover:bg-fuchsia-500 " type="text" name="name" required></input>
  //       <label>Sobrenome</label>
  //       <input value={formData.sobrenome} onChange={handleChange} className="bg-indigo-500 hover:bg-fuchsia-500 " type="text" name="sobrenome" required></input>
  //       <label>Email</label>
  //       <input value={formData.email} onChange={handleChange}className="bg-indigo-500 hover:bg-fuchsia-500 ..." type="text" name="email" required ></input>
  //       <label>Cep</label>
  //       <input value={formData.cep} onChange={handleChange} className="bg-indigo-500 hover:bg-fuchsia-500 ..." type="text" name="cep" required maxLength={8}></input>
  //       {/* <button type="submit" className="bg-green-900 p-2 rounded hover:bg-green-700 transition">Enviar</button> */}
  //       <button type="submit" className="bg-indigo-500 hover:bg-fuchsia-500 ...">Enviar</button>
  //     </form>
  //   </div>
  // )
