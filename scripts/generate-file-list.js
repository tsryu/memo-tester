import fs from 'fs';
import path from 'path';

// public 디렉토리 경로 설정
const jsonDir = path.join(process.cwd(), 'public');
// 생성된 파일 목록을 저장할 파일 경로 설정
const outputFilePath = path.join(jsonDir, 'fileList.json');

const generateFileList = async () => {
  try {
    // public 디렉토리의 파일 목록 읽기
    const files = await fs.promises.readdir(jsonDir);

    // .json 파일 필터링
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const result = [];

    // 각 파일에 대해 JSON 읽기 및 변환
    for (const file of jsonFiles) {
      const filePath = path.join(jsonDir, file);
      const data = await fs.promises.readFile(filePath, 'utf-8');
      const jsonData = JSON.parse(data);

      // title이 있는 경우에만 result 배열에 추가
      if (jsonData.title) {
        result.push({
          title: jsonData.title,
          value: file.replace('.json', ''), // 파일명에서 .json 제거하여 value 생성
        });
      }
    }

    // fileList.json 파일에 결과 저장
    await fs.promises.writeFile(outputFilePath, JSON.stringify(result, null, 2));
    console.log('fileList.json has been generated');
  } catch (err) {
    console.error('Unable to scan directory or write file:', err);
  }
};

generateFileList();
