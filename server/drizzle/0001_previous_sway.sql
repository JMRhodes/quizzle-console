ALTER TABLE `questions` RENAME COLUMN "name" TO "correct_answer";--> statement-breakpoint
ALTER TABLE `questions` ADD `difficulty` integer DEFAULT 1 NOT NULL;