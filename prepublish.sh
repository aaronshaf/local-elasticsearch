while [[ $# > 1 ]]
do
  key="$1"

  case $key in
      -v|--version)
      VERSION="$2"
      shift # past argument
      ;;
      *)
      # unknown option
      ;;
  esac
  shift
done

if [ -z "$VERSION" ]
  then
    echo "No --version argument supplied"
    exit 1
fi

curl -O https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-$VERSION.tar.gz
rm -rf elasticsearch
mkdir elasticsearch
tar -C elasticsearch -xf *.tar.gz --strip-components 1
rm -rf *.tar.gz
