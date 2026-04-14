## Git-Farm

## 개발 환경 요구사항

- Node.js `v24.14.1` (`.nvmrc` 기준)
- 터미널: **Git Bash** (Windows)

### fnm 설치 및 세팅 (Windows + Git Bash)

**1. fnm 설치** — PowerShell 또는 CMD에서 실행
```powershell
winget install Schniz.fnm
```

**2. fnm 실행 파일 경로 확인** — Git Bash에서 실행
```bash
find /c/Users/$USERNAME -name "fnm.exe" 2>/dev/null
# 예: /c/Users/SSAFY/AppData/Local/Microsoft/WinGet/Packages/Schniz.fnm_.../fnm.exe
```

**3. Git Bash PATH 등록** — 위에서 확인한 경로의 **디렉토리 부분**을 사용
```bash
# fnm.exe가 있는 디렉토리를 PATH에 추가 (fnm.exe 파일명 제외)
echo 'export PATH="$PATH:/c/Users/$USERNAME/AppData/Local/Microsoft/WinGet/Packages/Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe"' >> ~/.bashrc

# fnm 초기화 코드 추가 (PATH 등록 이후에 추가해야 함)
echo 'eval "$(fnm env --use-on-cd --shell bash)"' >> ~/.bashrc

# 적용
source ~/.bashrc
```

**4. fnm 동작 확인**
```bash
fnm --version
```

**5. 프로젝트 루트에서 Node 버전 설치 및 적용**
```bash
fnm install && fnm use

# 버전 확인
node --version  # v24.14.1
```

**6. 의존성 설치**
```bash
cd frontend && npm install
```

> `--use-on-cd` 설정 후에는 프로젝트 폴더 진입 시 `.nvmrc`를 읽어 **자동으로 버전 전환**됩니다.

## 기술 스택

Front : React19, TS, Vite, Tanstack Query, Zustand, R3F(React Three Fiber)

Back : Django, Supabase(PostgreSQL)
