"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { StarRatingInput } from '@/components/shared/StarRatingInput';
import { StarRatingDisplay } from '@/components/shared/StarRatingDisplay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_REVIEWS } from '@/lib/constants';
import type { Review } from '@/lib/types';
import { User, MessageSquare, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const feedbackFormSchema = z.object({
  name: z.string().optional(),
  rating: z.number().min(1, { message: "Rating is required." }).max(5),
  comments: z.string().min(10, { message: "Comments must be at least 10 characters." }),
});
type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function FeedbackPage() {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: { name: "", rating: 0, comments: "" },
  });

  async function onSubmit(data: FeedbackFormValues) {
    // Simulate API call & politeness check
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Feedback data:", data);
    
    const newReview: Review = {
      id: String(Date.now()),
      name: data.name || "Anonymous",
      rating: data.rating,
      comment: data.comments,
      date: new Date().toLocaleDateString(),
    };
    setReviews(prev => [newReview, ...prev.slice(0,2)]); // Keep latest 3
    setSubmissionStatus({ type: 'success', message: `Thank you for your feedback, ${data.name || 'guest'}!` });
    form.reset({ name: "", rating: 0, comments: "" });
  }

  return (
    <SectionWrapper title="Share Your Experience" subtitle="We value your feedback to help us improve.">
      <div className="grid lg:grid-cols-2 gap-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline">Leave a Review</CardTitle>
          </CardHeader>
          <CardContent>
            {submissionStatus && (
            <Alert variant={submissionStatus.type === 'success' ? "default" : "destructive"} className="mb-6 bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-700">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <AlertTitle>{submissionStatus.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">{submissionStatus.message}</AlertDescription>
            </Alert>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name (Optional)</FormLabel>
                    <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><FormControl><Input placeholder="Your Name" {...field} className="pl-10" /></FormControl></div>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="rating" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <StarRatingInput value={field.value} onChange={field.onChange} count={5} size={28} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="comments" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comments</FormLabel>
                    <div className="relative"><MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" /><FormControl><Textarea placeholder="Tell us about your experience..." {...field} rows={5} className="pl-10" /></FormControl></div>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-headline font-semibold text-primary mb-6">Recent Reviews</h3>
          <div className="space-y-6">
            {reviews.length > 0 ? reviews.map((review) => (
              <Card key={review.id} className="shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      {review.date && <CardDescription className="text-xs">{review.date}</CardDescription>}
                    </div>
                    <StarRatingDisplay rating={review.rating} size={18} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            )) : <p className="text-muted-foreground">No reviews yet. Be the first to leave one!</p>}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
