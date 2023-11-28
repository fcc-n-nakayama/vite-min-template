import { Container, Select, TextInput, Button, Checkbox, Anchor, Center, Affix, Space, Text } from '@mantine/core';
import classes from './index.module.css';

export function CustomerConfirmation() {
  return (
    <>
    <Affix className={classes.header} bg="#5bc8ac" position={{ top: 0 }}>
      <Container pt="lg">入力内容確認</Container>
    </Affix>
    
    <Container mt={100} className={classes.body}>
      <div style={{ display: 'flex' }}>
        <Text ml={200} fw="bold">First line</Text>
        <Space w={150} />
        <Text>Second line</Text>
      </div>
     
      <div style={{ display: 'flex' }}>
        <Text ml={200} fw="bold">First line</Text>
        <Space w={150} />
        <Text>Second line</Text>
      </div>

     <Container inline-block fw="bold">
     お客様氏名
    </Container>
     <TextInput variant="filled" p="sm" placeholder="例) 山田 太郎"/>

     <Container inline-block fw="bold">
     続柄
    </Container>
     <Select
        variant="filled"
        p="sm"
        comboboxProps={{ withinPortal: true }}
        data={['主人', '配偶者', '親', '子']}
        placeholder="選択してください"
      />

    <Container inline-block fw="bold">
     電話番号
    </Container>
     <TextInput variant="filled" p="sm" placeholder="例) 090-XXXX-XXXX"/>

     <Container inline-block fw="bold">
     メールアドレス
    </Container>
     <TextInput variant="filled" p="sm" placeholder="例) fuji@example.com"/>

     <Center mt="lg" mx="lg" fz={12}>
        フォームにご入力していただく内容は個人情報となります。
     </Center>
   
     <Center m="lg" fz={12}>
        下記の「個人情報の取り扱いについて」に同意される方は、
        チェックを入力してください。
     </Center>
   
    <Center>
    <Anchor href="https://www.fuji-jutaku.co.jp/privacy/" target="_blank" c="#4d9980" m="lg" fz={15}>
        ▶個人情報の取り扱いについて
    </Anchor>
    </Center>

    <Center>
    <Checkbox
      color="#5bc8ac"
      iconColor="#fff"
      fw="bold"
      size="sm"
      m="lg"
      label="「個人情報の取り扱いについて」に同意する"
    />
    </Center>
    </Container>
    <Center>
        <Button className={classes.button} color="#5bc8ac">
        確認画面へ
        </Button>
    </Center>

    </>
  );
}