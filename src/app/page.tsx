import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ticket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
      <Ticket size={32} className="text-red-500" />
      <h1 className="text-4xl font-bold text-blue-400">
        Welcome to Quick Ticket
      </h1>
      <p>Fast and simple Ticket Management System</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide opacity-0">
        <Link
          href="/tickets/new"
          className="bg-blue-500 text-white text-sm p-4 rounded-md font-bold cursor-pointer"
        >
          Submit a Ticket
        </Link>
        <Link
          href="/"
          className="bg-green-200 p-4 rounded-md cursor-pointer text-sm font-bold"
        >
          View Tickets
        </Link>
      </div>
    </div>
  );
}
