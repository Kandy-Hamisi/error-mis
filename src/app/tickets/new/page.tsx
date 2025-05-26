"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
const formSchema = z.object({
  subject: z.string().min(2),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters!" }),
  priority: z.enum(["Low", "Medium", "High"]),
});

const NewTicketPage = () => {
  // Defining Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      description: "",
      priority: "High",
    },
  });

  // defining a submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    //   do something with the form values
    console.log(values);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-500">
            Submit a Support Ticket{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about your issue..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold">
                      Priority
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger id="priority" className="w-full">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="High">High Priority</SelectItem>
                          <SelectItem value="Medium">
                            Medium Priority
                          </SelectItem>
                          <SelectItem value="Low">Low Priority</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
};
export default NewTicketPage;
