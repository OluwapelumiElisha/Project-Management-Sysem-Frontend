import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const GenericForminput = ({ placeholder, form, label, name, type, required, description, options, option }) => {
  switch (type) {
    case 'text':
    case 'password':
    case 'email': // Corrected 'Email' to 'email' for consistency
    case 'number':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Input placeholder={placeholder} type={type} {...field} />
              <FormMessage />
              <FormDescription>{description}</FormDescription> {/* Add FormDescription for consistency */}
            </FormItem>
          )}
        />
      );
    case 'textarea':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Textarea placeholder={placeholder} className="resize-none" {...field} />
              <FormMessage />
              <FormDescription>{description}</FormDescription> {/* Add FormDescription for consistency */}
            </FormItem>
          )}
        />
      );
    case 'select':
      if (options) {
        return (
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((opt, i) => (
                      <SelectItem key={i} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>{description}</FormDescription> {/* Add FormDescription for consistency */}
              </FormItem>
            )}
          />
        );
      }
    // case 'checkbox':
    //   return (
    //     <div className="flex items-center space-x-2">
    //       <Checkbox id={name} />
    //       <label htmlFor={name} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    //         {label}
    //       </label>
    //       <FormMessage />
    //       <FormDescription>{description}</FormDescription> {/* Add FormDescription for consistency */}
    //     </div>
    //   );
    // case 'radio':
    //   if (option) {
    //     return (
    //       <FormField
    //         control={form.control}
    //         name={name}
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>{label}</FormLabel>
    //             <RadioGroup defaultValue="comfortable">
    //               {option.map((opt, i) => (
    //                 <div className="flex items-center space-x-2" key={i}>
    //                   <RadioGroupItem value={opt.value} id={opt.id} />
    //                   <Label htmlFor={opt.id}>{opt.label}</Label>
    //                 </div>
    //               ))}
    //             </RadioGroup>
    //             <FormMessage />
    //             <FormDescription>{description}</FormDescription> {/* Add FormDescription for consistency */}
    //           </FormItem>
    //         )}
    //       />
    //     );
    //   }
  }
};

export default GenericForminput;

