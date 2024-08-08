import { Input, List, Typography } from "antd";
import { useEffect, useState } from "react";
import { useStore } from "../../../../context/Product";

const { Text } = Typography;
const { Search } = Input;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SearchDrawer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useStore();

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  return (
    <>
      <Search
        placeholder="Search for products..."
        onSearch={(value) => setSearchQuery(value)}
        style={{ marginBottom: 20 }}
      />
      <div>
        {filteredProducts.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={filteredProducts}
            renderItem={(product) => (
              <List.Item key={product.id}>
                <List.Item.Meta
                  avatar={
                    product.images.length > 0 && (
                      <img
                        src={`${API_BASE_URL}/${product.images[0].url}`}
                        alt={product.name}
                        width={100}
                        height={150}
                      />
                    )
                  }
                  title={<Text strong>{product.name}</Text>}
                  description={
                    <Text strong>
                      Rs.{product.discount_price || product.actual_price}
                    </Text>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};

export default SearchDrawer;
