import { Nurseries } from '@/types/nurseries';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
    data: Nurseries
}

const MainNurseries:FC<Props> = ( {data} ) => {
    const { hovered, ref } = useHover();
    return (
        <Card 
            shadow="sm" 
            padding="lg" radius="md" 
            withBorder 
            sx={(theme)=>({
                cursor: 'pointer',
                opacity: hovered?0.7:1
            })}
            ref={ref}
        >
            <Link href={`/${data.id}`}>
            <Card.Section component="a">
                <Image
                    src={data.image}
                    height={200}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} align='center'>{data.name}</Text>
            </Group>

            <Text size="sm" color="dimmed">
               {data.description}
            </Text>
            </Link>
        </Card>
    )
}

export default MainNurseries;