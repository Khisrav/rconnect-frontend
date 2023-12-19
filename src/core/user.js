import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';

export const getRandomAvatar = (username) =>
    createAvatar(thumbs, {
        seed: username,
    }).toDataUri()
    .catch((error) => {
        console.error('Error generating avatar:', error);
        throw error;
    });
