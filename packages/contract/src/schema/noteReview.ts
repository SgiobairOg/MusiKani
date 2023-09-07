import { z } from "zod";

export const NOTE_DURATION_NAMES = ['whole', 'half', 'quarter', 'eighth', 'sixteenth'] as const
export const NOTE_DURATION_FANCY_NAMES = ['semi-breve', 'quaver', 'semi-quaver', 'crochet', 'minim'] as const
export const NOTE_DURATION_BEATS = ['4', '2', '1', '1/2', '1/4'] as const;
export const NOTE_PITCH_CLASSES = ['A','B', 'C', 'D', 'E', 'F', 'G'] as const;
export const NOTE_OCTAVES = ['1', '2', '3', '4'] as [string, ...string[]];
export const NOTE_ACCIDENTALS = ['sharp', 'flat'] as const;
export const NOTE_CLEF = ['bass', 'treble'] as const;

export const NoteReviewSchema = z.object({
  id: z.string(),
  box: z.number().nonnegative().lt(6),
  nextReview: z.string().datetime(),
  data: z.object({
    duration: z.object({
      name: z.object({
        standard: z.enum(NOTE_DURATION_NAMES),
        fancy: z.enum(NOTE_DURATION_NAMES),
      }),
      beats: z.enum(NOTE_DURATION_BEATS),
    }),
    pitchClass: z.enum(NOTE_PITCH_CLASSES),
    accidental: z.enum(NOTE_ACCIDENTALS),
    pitch: z.object({
      class: z.enum(NOTE_PITCH_CLASSES),
      octave: z.enum(NOTE_OCTAVES),
    })
  })
})

export const NoteReviewsSchema = z.array(NoteReviewSchema);

export type NoteReview = z.TypeOf<typeof NoteReviewSchema>;
export type NoteReviews = z.TypeOf<typeof NoteReviewsSchema>;