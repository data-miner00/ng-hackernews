import type Story from '../models/hackernews/Item/Story';

export function generateStories(count: number): Story[] {
    const stories: Story[] = [];
    for (var i = 0; i < count; i++) {
        stories.push({ id: i, title: `Story no. ${i}`, type: 'story' });
    }
    return stories;
}
