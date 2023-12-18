/**
 * @description This file contains all the constants used in the application.
 */

/**
 * The maximum size of a file in MB.
 * @constant
 */
export const maximumFileSizeInMB = 100;

/**
 * The maximum size of a file in bytes.
 * @constant
 */
export const maximumFileSizeInBytes = maximumFileSizeInMB * 1024 * 1024;

/**
 * Title of the application.
 * @constant
 */
export const title = 'QTube';

/**
 * Accepted image formats.
 * @constant
 */
export const acceptedImages = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
];

/**
 * Accepted video formats.
 * @constant
 */
export const acceptedVideos = ['video/mp4', 'video/webm'];

/**
 * Maximum length of the title of a video.
 * @constant
 */
export const maximumTitleLength = 25;

/**
 * Maximum length of the description of a video.
 * @constant
 */
export const maximumDescriptionLength = 250;
