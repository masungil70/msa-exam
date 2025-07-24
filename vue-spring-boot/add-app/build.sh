echo "backend build..."
cd backend
./gradlew bootBuildImage
cd ..

echo "frontend build..."
cd frontend
npm run build
cd ..

docker compose build
